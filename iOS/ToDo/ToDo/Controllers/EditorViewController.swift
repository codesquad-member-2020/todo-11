//
//  EditorViewController.swift
//  ToDo
//
//  Created by jinie on 2020/04/08.
//  Copyright © 2020 jinie. All rights reserved.
//

import UIKit

class EditorViewController: UIViewController {

    @IBOutlet weak var titleTextField: UITextField!
    @IBOutlet weak var contentTextView: UITextView!
    
    @IBAction func touchUpAddTaskButton(_ sender: UIButton) {
        self.dismiss(animated: true, completion: nil)
    }
    @IBAction func touchUpCancelButton(_ sender: UIButton) {
        self.dismiss(animated: true, completion: nil)
    }

    override func viewDidLoad() {
        super.viewDidLoad()
    }

}
