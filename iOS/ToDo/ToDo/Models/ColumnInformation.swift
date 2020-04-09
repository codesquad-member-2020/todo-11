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
