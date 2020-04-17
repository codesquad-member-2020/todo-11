//
//  ListViewController+Delegate.swift
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
            let identifier = tasks[indexPath.row].identifier
            let moveToDone = UIAction(title: "Move to Done", image: UIImage(systemName: "paperplane")) { _ in
                guard let column = self.column else { return }
                self.taskInformationManager.moveToDone(identifier: identifier) {
                    self.request(column: column) {
                        DispatchQueue.main.async {
                            self.tableView.reloadData()
                            self.changeBadge()
                            NotificationCenter.default.post(name: moveToDoneNotification, object: nil)
                        }
                    }
                }
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
                self.taskInformationManager.deleteTask(identifier: identifier)
                self.taskInformationManager.tasks?.remove(at: indexPath.row)
                self.taskInformationManager.tasksCount! -= 1
                tableView.deleteRows(at: [indexPath], with: .fade)
                NotificationCenter.default.post(name: deleteTaskNotification, object: nil)
            }
            return UIMenu(title: "", children: [moveToDone, edit, delete])
        }
        return configuration
    }
    
}
