// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  const goodDrivers = drivers.filter(driver => driver.revenue > revenue)
  return goodDrivers
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const goodDrivers = driversWithRevenueOver(drivers, revenue)
  return goodDrivers.map(driver => driver.name)
}

function exactMatch(drivers, attribute) {
  return drivers.filter(driver => driver.revenue === attribute.revenue || driver.name === attribute.name)
  }

function exactMatchToList(drivers, attribute) {
  const matchedDrivers = exactMatch(drivers, attribute)
  return matchedDrivers.map(driver => driver.name)
}
