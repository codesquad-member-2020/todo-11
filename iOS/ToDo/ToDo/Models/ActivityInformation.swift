//
//  ActivityInformation.swift
//  ToDo
//
//  Created by jinie on 2020/04/15.
//  Copyright © 2020 jinie. All rights reserved.
//

import Foundation

struct ActivityInformation: Codable {
    
    let message: String
    let contents: Activities
    
}

struct Activities: Codable {
    
    let activities: [Activity]
    
    enum CodingKeys: String, CodingKey {
        case activities = "history"
    }
    
}

struct Activity: Codable {
    
    let identifier: Int
    let user: String
    let method: String
    let uri: String
    let param: String
    let createdDate: String
    
    enum CodingKeys: String, CodingKey {
        case identifier = "id"
        case user
        case method
        case uri
        case param
        case createdDate = "createdAt"
    }
    
}
