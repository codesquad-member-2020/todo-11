//
//  TaskInformationManager.swift
//  ToDo
//
//  Created by jinie on 2020/04/08.
//  Copyright © 2020 jinie. All rights reserved.
//

import Foundation

class TaskInformationManager {
    
    var tasks: [Task]?
    var tasksCount: Int?
    
    func request(column: Column, _ completion: @escaping () -> ()) {
        guard let encoded = "\(column)".addingPercentEncoding(withAllowedCharacters: .urlQueryAllowed) else { return }
        let urlString = "http://15.165.223.140:8080/api/notes/column?columnName=\(encoded)"
        guard let url = URL(string: urlString) else { return }
        let request = URLRequest(url: url)
        let session = URLSession(configuration: .default)
        let dataTask = session.dataTask(with: request) { (data, response, error) in
            guard let data = data else { return }
            let decoder = JSONDecoder()
            guard let responseData = try? decoder.decode(TaskInformation.self, from: data) else { return }
            self.tasks = responseData.contents.tasks
            self.tasksCount = responseData.contents.tasks.count
            completion()
        }
        dataTask.resume()
    }
    
}
