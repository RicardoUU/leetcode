

// 
const data= [
  {userId: 1, title:'title1', },
  {userId: 2, title:'title2', },
  {userId: 3, title:'title', },
  {userId: 4, title:null, },
]




// 实现
function find(data) {
  find.data = data;
  find.where = function (obj) {
    find.data = find.data.filter(item => {
      for (let key in obj) {
        if (obj[key] instanceof RegExp) {
          if (!obj[key].test(item[key])) {
            return false;
          }
        } else {
          if (item[key] !== obj[key]) {
            return false;
          }
        }
      }
      return true;
    });
    return this;
  }
  find.orderBy = function (key, type) {
    return find.data.sort((a, b) => {
      return type === 'asc' ? a[key] - b[key] : b[key] - a[key];
    });
  }
  
  return find;

}


// 方法2
 function find2(data) {
  return {
    where: function (obj) {
      data = data.filter(item => {
        for (let key in obj) {
          if (obj[key] instanceof RegExp) {
            if (!obj[key].test(item[key])) {
              return false;
            }
          } else {
            if (item[key] !== obj[key]) {
              return false;
            }
          }
        }
        return true;
      });
      return this;
    },
    orderBy: function (key, type) {
      return data.sort((a, b) => {
        return type === 'asc' ? a[key] - b[key] : b[key] - a[key];
      });
    }
  }
}

const res= find(data).where({
  // 包含数字
  title: /\d/,
}).orderBy('userId', 'desc');

console.log(res);