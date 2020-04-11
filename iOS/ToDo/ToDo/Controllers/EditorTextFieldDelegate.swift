//
//  EditorTextFieldDelegate.swift
//  ToDo
//
//  Created by jinie on 2020/04/12.
//  Copyright © 2020 jinie. All rights reserved.
//

import UIKit

class EditorTextFieldDelegate: NSObject, UITextFieldDelegate {
    
    var titleTextField: UITextField?
    var contentTextView: UITextView?

    func textFieldShouldReturn(_ textField: UITextField) -> Bool {
        if let count = titleTextField?.text?.count, count == 0 { return false }
        titleTextField?.resignFirstResponder()
        contentTextView?.becomeFirstResponder()
        return true
    }
    
}
