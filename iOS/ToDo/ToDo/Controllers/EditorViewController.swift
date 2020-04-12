//
//  EditorViewController.swift
//  ToDo
//
//  Created by jinie on 2020/04/08.
//  Copyright © 2020 jinie. All rights reserved.
//

import UIKit

class EditorViewController: UIViewController {

    @IBOutlet weak var addTaskButton: UIButton!
    @IBOutlet weak var titleTextField: UITextField!
    @IBOutlet weak var contentTextView: UITextView!
    
    @IBAction func touchUpAddTaskButton(_ sender: UIButton) {
        self.dismiss(animated: true, completion: nil)
    }
    @IBAction func touchUpCancelButton(_ sender: UIButton) {
        self.dismiss(animated: true, completion: nil)
    }
    
    @IBAction func textFieldEditingDidChange(_ sender: UITextField) {
        if let text = titleTextField.text, !text.isEmpty {
            addTaskButton.isEnabled = true
            addTaskButton.setTitleColor(.systemBlue, for: .normal)
        } else {
            addTaskButton.isEnabled = false
            addTaskButton.setTitleColor(.darkGray, for: .normal)
        }
    }
    
    private let textFieldDelegate = EditorTextFieldDelegate()
    private let textViewDelegate = EditorTextViewDelegate()

    override func viewDidLoad() {
        super.viewDidLoad()
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

}
