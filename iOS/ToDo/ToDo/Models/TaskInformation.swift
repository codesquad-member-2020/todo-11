//
//  Task.swift
//  ToDo
//
//  Created by jinie on 2020/04/08.
//  Copyright © 2020 jinie. All rights reserved.
//

import Foundation

struct Response: Codable {
    
    let message: String
    let contents: Tasks
    
}

struct Tasks: Codable {
    
    let tasks: [Task]
    
    enum CodingKeys: String, CodingKey {
        case tasks = "notes"
    }
    
}

struct Task: Codable {
    
    let identifier: Int
    let content: String
    let createdDate: String
    let updatedDate: String
    let userId: String
    
    enum CodingKeys: String, CodingKey {
        case identifier = "id"
        case content
        case createdDate = "createdAt"
        case updatedDate = "updatedAt"
        case userId
    }
    
}
