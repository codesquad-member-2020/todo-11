//
//  ActivitiesViewController.swift
//  ToDo
//
//  Created by jinie on 2020/04/15.
//  Copyright © 2020 jinie. All rights reserved.
//

import UIKit

class ActivitiesViewController: UIViewController {
    
    @IBOutlet weak var tableView: UITableView!
    
    private let tableViewCell = UINib(nibName: "ActivitiesTableViewCell", bundle: nil)
    private let activityInformationManager = ActivityInformationManager()

    override func viewDidLoad() {
        super.viewDidLoad()
        configureTableView()
        request()
    }
    
    func configureTableView() {
        tableView.dataSource = self
        tableView.register(tableViewCell, forCellReuseIdentifier: activitiesTableViewCell)
    }
    
    func request() {
        activityInformationManager.request {
            DispatchQueue.main.async {
                self.tableView.reloadData()
            }
        }
    }

}

extension ActivitiesViewController: UITableViewDataSource {
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return activityInformationManager.count ?? 0
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: activitiesTableViewCell, for: indexPath) as! ActivitiesTableViewCell
        if let activity = activityInformationManager.activities?[indexPath.row] {
            let actions = ["POST/api/notes": "Added",
                           "PATCH/api/notes": "Edited",
                           "PATCH/api/notes/move": "Moved",
                           "DELETE/api/notes": "Deleted"]
            let action = activity.method + activity.uri
            cell.actionLabel.text = "@\(activity.user) \(actions[action] ?? action)"
            
            let dateFormatter = DateFormatter()
            dateFormatter.dateFormat = "yyyy-MM-dd HH:mm:ss"
            dateFormatter.timeZone = TimeZone(identifier: "GMT")
            let createdDate = dateFormatter.date(from: activity.createdDate)!
            let interval = Date().timeIntervalSince(createdDate)
            
            if Int(interval / 60) < 60 {
                cell.timeLabel.text = "\(Int(interval / 60)) minutes ago"
            } else if Int(interval / 3600) < 3600 {
                cell.timeLabel.text = "\(Int(interval / 3600)) hours ago"
            } else {
                cell.timeLabel.text = "\(Int(interval / 86400)) days ago"
            }
        }
        return cell
    }
    
}
