//
//  EditorTextViewDelegate.swift
//  ToDo
//
//  Created by jinie on 2020/04/12.
//  Copyright © 2020 jinie. All rights reserved.
//

import UIKit

class EditorTextViewDelegate: NSObject, UITextViewDelegate {
    
    var contentTextView: UITextView?
    
    func textViewDidBeginEditing(_ textView: UITextView) {
        if contentTextView?.textColor == .lightGray {
            contentTextView?.text = ""
            contentTextView?.textColor = .black
        }
    }
    
    func textViewDidEndEditing(_ textView: UITextView) {
        if let contentTextView = contentTextView, contentTextView.text.isEmpty {
            contentTextView.text = "Content"
            contentTextView.textColor = .lightGray
        }
    }
    
    func textView(_ textView: UITextView, shouldChangeTextIn range: NSRange, replacementText text: String) -> Bool {
        guard let textViewText = textView.text else { return true }
        let count = textViewText.count + text.count
        return count <= 500
    }
    
}
