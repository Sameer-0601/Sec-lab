const myData = [
        { name: "Sameer", 
            image: "https://tse2.mm.bing.net/th/id/OIP.F-xjE7JRE2ICUvGtJg-aOgHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3" 
        },

        { name: "Sam", 
        image: "https://tse2.mm.bing.net/th/id/OIP.F-xjE7JRE2ICUvGtJg-aOgHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3" 
        },

        { name: "Sanjay", 
        image: "https://tse2.mm.bing.net/th/id/OIP.F-xjE7JRE2ICUvGtJg-aOgHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3" 
        },
]

const con = document.getElementById("container");
for(let i=0;i<myData.length;i++)
{
    con.innerHTML+=`
    <h1>${myData[i].name}</h1>
    <img src=${myData[i].image} height = 100px />
    `
}