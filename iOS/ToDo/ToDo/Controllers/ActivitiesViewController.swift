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

    override func viewDidLoad() {
        super.viewDidLoad()
        configureTableView()
    }
    
    func configureTableView() {
        tableView.dataSource = self
        tableView.register(tableViewCell, forCellReuseIdentifier: activitiesTableViewCell)
    }

}

extension ActivitiesViewController: UITableViewDataSource {
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 20
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: activitiesTableViewCell, for: indexPath)
        return cell
    }
    
}
