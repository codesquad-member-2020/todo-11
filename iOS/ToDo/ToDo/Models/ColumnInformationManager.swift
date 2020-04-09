//
//  ColumnInformationManager.swift
//  ToDo
//
//  Created by jinie on 2020/04/09.
//  Copyright © 2020 jinie. All rights reserved.
//

import Foundation

class ColumnInformationManager {
    
    var columns: [String]?
    
    func request(_ completion: @escaping () -> ()) {
        guard let url = URL(string: "http://15.165.223.140:8080/api/columns") else { return }
        let request = URLRequest(url: url)
        let session = URLSession(configuration: .default)
        let dataTask = session.dataTask(with: request) { (data, response, error) in
            guard let data = data else { return }
            let decoder = JSONDecoder()
            guard let responseData = try? decoder.decode(ColumnInformation.self, from: data) else { return }
            self.columns = responseData.contents.columns
            completion()
        }
        dataTask.resume()
    }
    
}
