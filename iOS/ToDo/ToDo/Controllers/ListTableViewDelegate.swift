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
            let moveToDone = UIAction(title: "Move to Done", image: UIImage(systemName: "paperplane")) { _ in
                
            }
            let edit = UIAction(title: "Edit", image: UIImage(systemName: "square.and.pencil")) { _ in
                
            }
            let delete = UIAction(title: "Delete", image: UIImage(systemName: "trash")) { _ in
                guard let tasks = self.taskInformationManager.tasks else { return }
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
