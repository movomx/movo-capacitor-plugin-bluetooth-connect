import Foundation

@objc public class BluetoothConnect: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
