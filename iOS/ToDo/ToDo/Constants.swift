//
//  Constants.swift
//  ToDo
//
//  Created by jinie on 2020/04/07.
//  Copyright © 2020 jinie. All rights reserved.
//

import Foundation

let toDoSegue = "toDoSegue"
let inProgressSegue = "inProgressSegue"
let doneSegue = "doneSegue"
let editorSegue = "editorSegue"

let listTableViewCell = "listTableViewCell"

let toDoRequestURL = "http://15.165.223.140:8080/api/notes/column?columnName=%ED%95%B4%EC%95%BC%ED%95%A0%EC%9D%BC"
let inProgressRequestURL = "http://15.165.223.140:8080/api/notes/column?columnName=%ED%95%98%EB%8A%94%EC%A4%91"
let doneRequestURL = "http://15.165.223.140:8080/api/notes/column?columnName=%EB%8B%A4%ED%96%88%EC%96%B4"

let tasksNotification = Notification.Name("tasksNotification")
