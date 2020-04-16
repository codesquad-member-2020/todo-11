//
//  ActivitiesTableViewCell.swift
//  ToDo
//
//  Created by jinie on 2020/04/15.
//  Copyright © 2020 jinie. All rights reserved.
//

import UIKit

class ActivitiesTableViewCell: UITableViewCell {
    
    @IBOutlet weak var actionLabel: UILabel!
    @IBOutlet weak var timeLabel: UILabel!

    override func awakeFromNib() {
        super.awakeFromNib()
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)
    }
    
}
