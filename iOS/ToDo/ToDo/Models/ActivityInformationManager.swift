//
//  ActivityInformationManager.swift
//  ToDo
//
//  Created by jinie on 2020/04/15.
//  Copyright © 2020 jinie. All rights reserved.
//

import Foundation

class ActivityInformationManager {
    
    var activities: [Activity]? {
        didSet {
            count = activities?.count
        }
    }
    var count: Int?
    
    func request(_ completion: @escaping () -> ()) {
        guard let url = URL(string: "http://15.165.223.140:80/api/history") else { return }
        let request = URLRequest(url: url)
        let session = URLSession(configuration: .default)
        let dataTask = session.dataTask(with: request) { (data, response, error) in
            guard let data = data else { return }
            let decoder = JSONDecoder()
            guard let responseData = try? decoder.decode(ActivityInformation.self, from: data) else { return }
            self.activities = responseData.contents.activities
            completion()
        }
        dataTask.resume()
    }
    
}
