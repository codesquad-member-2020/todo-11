//
//  Task.swift
//  ToDo
//
//  Created by jinie on 2020/04/08.
//  Copyright © 2020 jinie. All rights reserved.
//

import Foundation

struct Tasks: Codable {
    
    let tasks: [Task]
    
}

struct Task: Codable {
    
    let identifier: Int
    let columnName: String
    let content: String
    let createdDate: Date
    let updatedDate: Date
    let writer: String
    let deleted: Bool
    
    enum CodingKeys: String, CodingKey {
        case identifier = "id"
        case columnName
        case content
        case createdDate = "createdAt"
        case updatedDate = "updatedAt"
        case writer
        case deleted
    }
    
}
