//
//  MainViewController.swift
//  ToDo
//
//  Created by jinie on 2020/04/07.
//  Copyright © 2020 jinie. All rights reserved.
//

import UIKit

class MainViewController: UIViewController {
    
    override func viewDidLoad() {
        super.viewDidLoad()
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if segue.identifier == toDoSegue, let listViewController = segue.destination as? ListViewController {
            listViewController.column = .toDo
        } else if segue.identifier == inProgressSegue, let listViewController = segue.destination as? ListViewController {
            listViewController.column = .inProgress
        } else if segue.identifier == doneSegue, let listViewController = segue.destination as? ListViewController {
            listViewController.column = .done
        } else if segue.identifier == addTaskSegue, let editorViewController = segue.destination as? EditorViewController {
            if let column = sender as? Column {
                editorViewController.mode = .add
                editorViewController.column = column
            }
        } else if segue.identifier == editTaskSegue, let editorViewController = segue.destination as? EditorViewController {
            if let task = sender as? Task {
                editorViewController.mode = .edit
                editorViewController.task = task
            }
        }
    }

}
