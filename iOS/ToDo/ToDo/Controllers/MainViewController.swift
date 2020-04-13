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
        } else if segue.identifier == editorSegue, let editorViewController = segue.destination as? EditorViewController {
            if let column = sender as? Column {
                editorViewController.column = column
            }
        }
    }

}
