student_data.sort().forEach(  (data, index) =>  {
    
    console.log(`
   
    Student Name :   ${data[0]}
    Class        :   ${data[3]}
    Roll Number  :   ${data[1]}
    Age          :   ${data[2]}
    Gender       :   ${data[4]}
    Location     :   ${data[5]}
    Admission Fee:   ${data[6]}
    ID No.       :   ${index}

    `);

    total_fees += (+data[6])

    console.log(`
    Total Admnission fees:  ${total_fees}

    `);
}); 



student_data.forEach(  (data,index) => {
    if(data[4]=== 'Female'){
        console.log(`
        Female Student: ${index+1}. ${data[0]}
        `);
    }
    else if(data[3]==='5'){
        console.log(`
        Class Five Students Id: ${index+1}
        Name:   ${data[0]}
        Class:  ${data[3]}
        Roll :  ${data[1]} 
        `);
    }   else if(data[3]==='6'){
        console.log(`
        Class Six Students Id: ${index+1}
        Name:   ${data[0]}
        Class:  ${data[3]}
        Roll :  ${data[1]} 
        `);
    }else if(data[3]==='09'){
        console.log(`
        Class Nine Students Id: ${index+1}
        Name:   ${data[0]}
        Class:  ${data[3]}
        Roll :  ${data[1]} 
        `);}
    else if(data[3]==='11'){
        console.log(`
        Class XI Students Id: ${index+1}
        Name:   ${data[0]}
        Class:  ${data[3]}
        Roll :  ${data[1]} 
        `);
    }else if(data[5]==='Uttra'){
        console.log(`
        Location Uttra Students: ${index+1}
        Name:     ${data[0]}
        Class:    ${data[3]}
        Roll :    ${data[1]} 
        `);
    }else if(data[2]===data[2]>='10'  <=25){
        console.log(`
        10-25 Years Students: ${index+1}
        Name:     ${data[0]}
        Class:    ${data[3]}
        Roll :    ${data[1]}
        Age  :    ${data[2]} 
        `);
    }
    
});