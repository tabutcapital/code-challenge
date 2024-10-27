function calculateNetSalary() {
   
    const basicSalary = 50000;
    
    let payee = ((basicSalary) * 0.25);
    console.log('12500');
    
  
    let NHIFDeductions = (basicSalary * 0.024);
    console.log('1200');
    
  
    let NSSFDeductions = (basicSalary * 0.06);
    console.log('3000');
    

    let netSalary = basicSalary - payee - NHIFDeductions - NSSFDeductions;
    console.log('33300');
    
 }
  
  