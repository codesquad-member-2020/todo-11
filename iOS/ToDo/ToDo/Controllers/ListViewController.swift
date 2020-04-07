//
//  ListViewController.swift
//  ToDo
//
//  Created by jinie on 2020/04/07.
//  Copyright © 2020 jinie. All rights reserved.
//

import UIKit

class ListViewController: UIViewController {

    @IBOutlet weak var countLabel: UILabel!
    @IBOutlet weak var headerLabel: UILabel!
    @IBOutlet weak var tableView: UITableView!
    
    private var tableViewDataSource = ListTableViewDataSource()
    private let tableViewCell = UINib(nibName: "ListTableViewCell", bundle: nil)
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        configureHeader()
        configureTableView()
    }
    
    func configureHeader() {
        countLabel.layer.cornerRadius = 12
        countLabel.layer.masksToBounds = true
    }
    
    func configureTableView() {
        tableView.dataSource = tableViewDataSource
        tableView.register(tableViewCell, forCellReuseIdentifier: listTableViewCell)
    }

}
