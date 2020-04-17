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
        guard let url = URL(string: "http://15.165.223.140:80/api/notes/category?categoryId=\(column)") else { return }
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
    
    func addTask(column: Column, data: String, _ completion: @escaping () -> ()) {
        guard let url = URL(string: "http://15.165.223.140:80/api/notes") else { return }
        let encoder = JSONEncoder()
        let addTaskInfo = AddTaskInfo(categoryId: column.rawValue, content: data, user: "anonymous")
        let jsonData = try? encoder.encode(addTaskInfo)
        var request = URLRequest(url: url)
        request.httpMethod = "POST"
        request.addValue("application/json", forHTTPHeaderField: "Content-Type")
        request.httpBody = jsonData
        let session = URLSession(configuration: .default)
        let dataTask = session.dataTask(with: request) { (data, response, error) in
            completion()
        }
        dataTask.resume()
    }
    
    func moveToDone(identifier: Int, _ completion: @escaping () -> ()) {
        guard let url = URL(string: "http://15.165.223.140:8080/api/notes/move") else { return }
        var request = URLRequest(url: url)
        request.httpMethod = "PATCH"
        request.addValue("application/json", forHTTPHeaderField: "Content-Type")
        let body = """
            {
                "categoryId": 3,
                "id": \(identifier),
                "rank": 100
            }
        """.data(using: .utf8)
        request.httpBody = body
        let session = URLSession(configuration: .default)
        let dataTask = session.dataTask(with: request) { (data, response, error) in
            completion()
        }
        dataTask.resume()
    }
    
    func editTask(column: Column, data: String, identifier: Int, _ completion: @escaping () -> ()) {
        guard let url = URL(string: "http://15.165.223.140:80/api/notes") else { return }
        let encoder = JSONEncoder()
        let editTaskInfo = EditTaskInfo(categoryId: column.rawValue, content: data, id: identifier, user: "anonymous")
        let jsonData = try? encoder.encode(editTaskInfo)
        var request = URLRequest(url: url)
        request.httpMethod = "PATCH"
        request.addValue("application/json", forHTTPHeaderField: "Content-Type")
        request.httpBody = jsonData
        let session = URLSession(configuration: .default)
        let dataTask = session.dataTask(with: request) { (data, response, error) in
            completion()
        }
        dataTask.resume()
    }
    
    func deleteTask(identifier: Int) {
        guard let url = URL(string: "http://15.165.223.140:80/api/notes?id=\(identifier)") else { return }
        var request = URLRequest(url: url)
        request.httpMethod = "DELETE"
        request.addValue("application/json", forHTTPHeaderField: "Content-Type")
        let session = URLSession(configuration: .default)
        let dataTask = session.dataTask(with: request)
        dataTask.resume()
    }
    
    func move() {
        guard let url = URL(string: "http://15.165.223.140:8080/api/notes/move") else { return }
        var request = URLRequest(url: url)
        request.httpMethod = "PATCH"
        request.addValue("application/json", forHTTPHeaderField: "Content-Type")
        let body = """
            {
                "categoryId": 2,
                "id": 11,
                "rank": 3
            }
        """.data(using: .utf8)
        request.httpBody = body
        let session = URLSession(configuration: .default)
        let dataTask = session.dataTask(with: request) { (data, response, error) in
            
        }
    }
    
}

struct AddTaskInfo: Codable {
    
    let categoryId: Int
    let content: String
    let user: String
    
}

struct EditTaskInfo: Codable {
    
    let categoryId: Int
    let content: String
    let id: Int
    let user: String
    
}
