//
//  ColumnInformation.swift
//  ToDo
//
//  Created by jinie on 2020/04/09.
//  Copyright © 2020 jinie. All rights reserved.
//

import Foundation

struct ColumnInformation: Codable {
    
    let message: String
    let contents: Columns
    
}

struct Columns: Codable {
    
    let columns: [String]
    
}

enum Column: String, CustomStringConvertible {

    case toDo = "해야할일"
    case inProgress = "하는중"
    case done = "다했어"
    
    var description: String {
        return "\(self.rawValue)"
    }
    
}
