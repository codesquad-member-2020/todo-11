//
//  EditorViewController.swift
//  ToDo
//
//  Created by jinie on 2020/04/08.
//  Copyright © 2020 jinie. All rights reserved.
//

import UIKit

class EditorViewController: UIViewController {

    @IBOutlet weak var confirmButton: UIButton!
    @IBOutlet weak var titleTextField: UITextField!
    @IBOutlet weak var contentTextView: UITextView!
    
    let taskInformationManager = TaskInformationManager()
    var mode: Mode?
    var column: Column?
    var task: Task?
    
    @IBAction func touchUpConfirmButton(_ sender: UIButton) {
        if mode == .add {
            addTask()
        } else if mode == .edit {
            editTask()
        }
    }
    
    func addTask() {
        guard let column = column else { return }
        guard let title = titleTextField.text else { return }
        let content = contentTextView.text ?? ""
        let data = "\(title)\n\n\(content)"
        print(data)
        taskInformationManager.addTask(column: column, data: data) {
            DispatchQueue.main.async {
                NotificationCenter.default.post(name: addTaskNotification,
                                                object: nil,
                                                userInfo: [columnInfoKey: column])
                self.dismiss(animated: true, completion: nil)
            }
        }
    }
    
    func editTask() {
        guard let column = column else { return }
        guard var task = task else { return }
        guard let text = titleTextField.text else { return }
        task.content = text
        taskInformationManager.editTask(column: column, task: task) {
            DispatchQueue.main.async {
                NotificationCenter.default.post(name: editTaskNotification,
                                                object: nil,
                                                userInfo: [columnInfoKey: column])
                self.dismiss(animated: true, completion: nil)
            }
        }
    }
    
    @IBAction func touchUpCancelButton(_ sender: UIButton) {
        self.dismiss(animated: true, completion: nil)
    }
    
    @IBAction func textFieldEditingDidChange(_ sender: UITextField) {
        if let text = titleTextField.text, !text.isEmpty {
            confirmButton.isEnabled = true
            confirmButton.setTitleColor(.systemBlue, for: .normal)
        } else {
            confirmButton.isEnabled = false
            confirmButton.setTitleColor(.darkGray, for: .normal)
        }
    }
    
    private let textFieldDelegate = EditorTextFieldDelegate()
    private let textViewDelegate = EditorTextViewDelegate()

    override func viewDidLoad() {
        super.viewDidLoad()
        if mode == .add {
            configureTitleTextField()
            configureContentTextView()
        } else if mode == .edit {
            NotificationCenter.default.addObserver(self,
                                                   selector: #selector(configureColumn),
                                                   name: configureColumnNotification,
                                                   object: nil)
            titleTextField.text = task?.content
        }
    }
    
    func configureTitleTextField() {
        titleTextField.delegate = textFieldDelegate
        textFieldDelegate.titleTextField = titleTextField
        textFieldDelegate.contentTextView = contentTextView
        titleTextField.becomeFirstResponder()
    }
    
    func configureContentTextView() {
        contentTextView.delegate = textViewDelegate
        textViewDelegate.contentTextView = contentTextView
        contentTextView.text = "Content"
        contentTextView.textColor = .lightGray
    }
    
    @objc func configureColumn(_ notification: Notification) {
        guard let userInfo = notification.userInfo else { return }
        let columnInfo = userInfo[columnInfoKey] as! Column
        column = columnInfo
    }

}

enum Mode {
    
    case add
    case edit
    
}
