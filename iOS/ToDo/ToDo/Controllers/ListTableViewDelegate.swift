//
//  ListTableViewDelegate.swift
//  ToDo
//
//  Created by jinie on 2020/04/14.
//  Copyright © 2020 jinie. All rights reserved.
//

import UIKit

extension ListViewController: UITableViewDelegate {

    func tableView(_ tableView: UITableView, contextMenuConfigurationForRowAt indexPath: IndexPath, point: CGPoint) -> UIContextMenuConfiguration? {
        let configuration = UIContextMenuConfiguration(identifier: nil, previewProvider: nil) { _ -> UIMenu? in
            guard let tasks = self.taskInformationManager.tasks else { return nil }
            let moveToDone = UIAction(title: "Move to Done", image: UIImage(systemName: "paperplane")) { _ in
                
            }
            let edit = UIAction(title: "Edit", image: UIImage(systemName: "square.and.pencil")) { _ in
                guard let column = self.column else { return }
                let task = tasks[indexPath.row]
                self.parent?.performSegue(withIdentifier: editTaskSegue, sender: task)
                NotificationCenter.default.post(name: configureColumnNotification,
                                                object: nil,
                                                userInfo: [columnInfoKey: column])
            }
            let delete = UIAction(title: "Delete", image: UIImage(systemName: "trash"), attributes: .destructive) { _ in
                let identifier = tasks[indexPath.row].identifier
                self.taskInformationManager.deleteTask(identifier: identifier)
                self.taskInformationManager.tasks?.remove(at: indexPath.row)
                self.taskInformationManager.tasksCount! -= 1
                tableView.deleteRows(at: [indexPath], with: .fade)
            }
            return UIMenu(title: "", children: [moveToDone, edit, delete])
        }
        return configuration
    }
    
}

//extension ListViewController: UITableViewDragDelegate {
//
//    func tableView(_ tableView: UITableView, itemsForBeginning session: UIDragSession, at indexPath: IndexPath) -> [UIDragItem] {
//        guard let tasks = taskInformationManager.tasks else { return [] }
//        let task = tasks[indexPath.row]
//        let itemProvider = NSItemProvider()
//        let dragItem = UIDragItem(itemProvider: itemProvider)
//        dragItem.localObject = task
//        return [dragItem]
//    }
//
//}
//
//extension ListViewController: UITableViewDropDelegate {
//
//    func tableView(_ tableView: UITableView, performDropWith coordinator: UITableViewDropCoordinator) {
//        let destinationIndexPath: IndexPath
//
//        if let indexPath = coordinator.destinationIndexPath {
//            destinationIndexPath = indexPath
//        } else {
//            let section = tableView.numberOfSections - 1
//            let row = tableView.numberOfRows(inSection: section)
//            destinationIndexPath = IndexPath(row: row, section: section)
//        }
//
//        let item = coordinator.items.first!
////        let task = item.dragItem as! Task
//
//        if let sourceIndexPath = item.sourceIndexPath {
//            taskInformationManager.tasks?.remove(at: sourceIndexPath.row)
//            taskInformationManager.tasks?.append(<#T##newElement: Task##Task#>)
//        } else {
//
//        }
//    }
//
//}
