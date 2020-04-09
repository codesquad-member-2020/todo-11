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
    
    func request(_ completion: @escaping () -> ()) {
        taskInformationManager.request(completion)
    }
    
    func tasksCount() -> Int {
        return taskInformationManager.tasksCount ?? 0
    }

}
