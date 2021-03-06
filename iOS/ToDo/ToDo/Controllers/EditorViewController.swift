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
            configureAddModeView()
        } else {
            NotificationCenter.default.addObserver(self,
                                                   selector: #selector(configureColumn),
                                                   name: configureColumnNotification,
                                                   object: nil)
            configureEditModeView()
        }
    }
    
    func configureAddModeView() {
        configureTitleTextField()
        configureContentTextView()
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
    
    func configureEditModeView() {
        confirmButton.isEnabled = true
        confirmButton.setTitleColor(.systemBlue, for: .normal)
        guard let task = task else { return }
        let lines = task.content.components(separatedBy: "\n\n")
        titleTextField.text = lines.first
        contentTextView.text = lines.last
    }
    
    @objc func configureColumn(_ notification: Notification) {
        guard let userInfo = notification.userInfo else { return }
        let columnInfo = userInfo[columnInfoKey] as! Column
        column = columnInfo
    }
    
    func addTask() {
        guard let column = column else { return }
        guard let title = titleTextField.text else { return }
        let text = contentTextView.text!
        let content = text != "Content" ? text : ""
        let data = "\(title)\n\n\(content)"
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
        guard let task = task else { return }
        guard let title = titleTextField.text else { return }
        let text = contentTextView.text!
        let content = text != "Content" ? text : ""
        let data = "\(title)\n\n\(content)"
        let identifier = task.identifier
        taskInformationManager.editTask(column: column, data: data, identifier: identifier) {
            DispatchQueue.main.async {
                NotificationCenter.default.post(name: editTaskNotification,
                                                object: nil,
                                                userInfo: [columnInfoKey: column])
                self.dismiss(animated: true, completion: nil)
            }
        }
    }

}

enum Mode {
    
    case add
    case edit
    
}
