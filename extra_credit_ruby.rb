array1 = [
  { name: 'John', age: 25},
  { name: 'Jane', age: 58},
  { name: 'Josh', age: 12}
]

array2 = [
  { name: 'Jane', age: 58},
  { name: 'John', age: 25}
]

array3 = [
  { name: 'John', age: 25},
  { name: 'Jane', age: 58}           
]


n = 1
u = 0
nextArray = array1
array1.each do |t|
  if nextArray.all?{ |t| t[u] }
    puts "array#{n} is a winner."
  elsif array2.all?{ |t| t[u]  }
    puts "array#{n} is a winner."
  elsif array3.all?{ |t| t[u]  }
    puts "array#{n} is a winner."
  end
u += 1
n += 1
nextArray = array#{n}
end