//
//  ListTableViewDataSource.swift
//  ToDo
//
//  Created by jinie on 2020/04/07.
//  Copyright © 2020 jinie. All rights reserved.
//

import UIKit

class ListTableViewDataSource: NSObject, UITableViewDataSource {
    
    let taskInformationManager = TaskInformationManager()

    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return taskInformationManager.tasksCount ?? 0
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: listTableViewCell, for: indexPath) as! ListTableViewCell
        cell.titleLabel.text = taskInformationManager.tasks?[indexPath.row].content
        return cell
    }
    
    func tableView(_ tableView: UITableView, commit editingStyle: UITableViewCell.EditingStyle, forRowAt indexPath: IndexPath) {
        if editingStyle == .delete {
            guard let tasks = taskInformationManager.tasks else { return }
            let identifier = tasks[indexPath.row].identifier
            taskInformationManager.deleteTask(identifier: identifier)
            taskInformationManager.tasks?.remove(at: indexPath.row)
            taskInformationManager.tasksCount! -= 1
            tableView.deleteRows(at: [indexPath], with: .fade)
        }
    }
    
    func request(column: Column, _ completion: @escaping () -> ()) {
        taskInformationManager.request(column: column) {
            completion()
        }
    }
    
    func tasksCount() -> Int {
        return taskInformationManager.tasksCount ?? 0
    }

}
