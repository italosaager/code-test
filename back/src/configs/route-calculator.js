function calculateRoutes(clients) {
    let route = [clients[0]];
    let clientsLeft = clients.slice(1);
  
    while (clientsLeft.length > 0) {
      let lastClient = route[route.length - 1];
      let nextIndex = 0;
      let minDist = Number.MAX_VALUE;
  
      for (let i = 0; i < clientsLeft.length; i++) {
        let distance = Math.sqrt(
          Math.pow(lastClient.eixo_x - clientsLeft[i].eixo_x, 2) +
          Math.pow(lastClient.eixo_y - clientsLeft[i].eixo_y, 2)
        );
  
        if (distance < minDist) {
          minDist = distance;
          nextIndex = i;
        }
      }
  
      route.push(clientsLeft[nextIndex]);
      clientsLeft.splice(nextIndex, 1);
    }
  
    route.push(clients[0]);
  
    return route;
  }
  
  module.exports = calculateRoutes;