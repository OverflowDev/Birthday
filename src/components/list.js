import React from 'react';

export default function list({info, upcoming}) {

  return (
      <ul>
          {iterate(info, upcoming)}
      </ul>
  );
}

function iterate(data, flag){
    if (!data) return;
    const bgColor = flag ? { backgroundColor : "#ffe66d"} : {};
    return (
        <>
            {
                data.map( (person, index) => {
                          // Assuming person.birthday is in the format "MM-DD"
        const [month, day] = person.birthday.split('-').map(Number);
        const birthdayDate = new Date(new Date().getFullYear(), month - 1, day);

         // Options for formatting the date
         const options = { month: 'long', day: 'numeric', year: 'numeric' };

        console.log(birthdayDate)
                    return (
                        <li key={index}>
                            <div className="flex" style={bgColor}>
                                <img src={person.img} alt="img" />
                                <div className="title">
                                    <h3 className='name'>{person.name}</h3>
                                    {/* <h5 className="age">{Old(person.birthday)} years</h5> */}
                                    {/* <h5 className="age">{birthdayDate.toLocaleDateString()}</h5> */}
                                    <h5 className="age">{birthdayDate.toLocaleDateString(undefined, options)}</h5>

                                </div>
                            </div>
                        </li>
                    )
                })
            }
        </>
    )
}

// how old the person is
function Old(personAge){
    let year = new Date(personAge).getFullYear();
    let currentYear = new Date().getFullYear();
    
    let age = currentYear - year;
   return age;
}