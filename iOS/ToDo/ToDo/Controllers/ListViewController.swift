//
//  ListViewController.swift
//  ToDo
//
//  Created by jinie on 2020/04/07.
//  Copyright © 2020 jinie. All rights reserved.
//

import UIKit

class ListViewController: UIViewController {

    @IBOutlet weak var badgeLabel: UILabel!
    @IBOutlet weak var titleLabel: UILabel!
    @IBOutlet weak var tableView: UITableView!
    
    @IBAction func touchUpAddButton(_ sender: UIButton) {
        self.parent?.performSegue(withIdentifier: editorSegue, sender: column)
    }
    
    private let tableViewCell = UINib(nibName: "ListTableViewCell", bundle: nil)
    var column: Column?
    let taskInformationManager = TaskInformationManager()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        configureHeader()
        configureTableView()
        request()
        NotificationCenter.default.addObserver(self,
                                               selector: #selector(renewList),
                                               name: addTaskNotification,
                                               object: nil)
    }
    
    func configureHeader() {
        badgeLabel.layer.cornerRadius = 12
        badgeLabel.layer.masksToBounds = true
        guard let column = self.column else { return }
        titleLabel.text = "\(column)"
    }
    
    func configureTableView() {
        tableView.dataSource = self
        tableView.delegate = self
        tableView.register(tableViewCell, forCellReuseIdentifier: listTableViewCell)
    }
    
    func request() {
        guard let column = self.column else { return }
        request(column: column) {
            DispatchQueue.main.async {
                self.tableView.reloadData()
                self.badgeLabel.text = String(self.tasksCount())
            }
        }
    }
    
    @objc func renewList(_ notification: Notification) {
        guard let userInfo = notification.userInfo else { return }
        let columnInfo = userInfo[addTaskInfoKey] as! Column
        guard columnInfo == column else { return }
        request(column: columnInfo) {
            DispatchQueue.main.async {
                self.tableView.reloadData()
            }
        }
    }

}
