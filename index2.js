function calculatespeed() {
    const speedLimit = 70
    if (speed < 70) {
      speed  = 'Ok';
    } else {
      points = (speed - speedLimit / 5);
     if (points > 12) {
        console.log('License suspended');
    } if ( speed === 80) {
        console.log('Points: 2');
        
    }
}
    
} 