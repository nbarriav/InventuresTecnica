from compute25 import solutions
from itertools import permutations
# Function to get the string expression of the numbers and operators
def get_expression(numbers, operators):
  exprs = [
    # a {op} b {op} c {op} d
    f'{numbers[0]} {operators[0]} {numbers[1]} {operators[1]} {numbers[2]} {operators[2]} {numbers[3]}',
    # (a {op} b) {op} (c {op} d)
    f'({numbers[0]} {operators[0]} {numbers[1]}) {operators[1]} ({numbers[2]} {operators[2]} {numbers[3]})',
    # (a {op} (b {op} c)) {op} d
    f'({numbers[0]} {operators[0]} ({numbers[1]} {operators[1]} {numbers[2]})) {operators[2]} {numbers[3]}',
  ]
  return exprs

# Function to check if any of the permutations of the numbers and operators is 25
def check_25(numbers, operators):
  # range 4 because there are 4 operators
  for op1 in range(4):
    for op2 in range(4):
      for op3 in range(4):
        exprs = get_expression(numbers, [operators[op1], operators[op2], operators[op3]])
        for expr in exprs:
          try:
            if eval(expr) == 25:
              return expr
          except:
            continue
  return 'SIN SOLUCIÓN'

# Check if any of the permutations of the numbers and operators is 25
def compute_25(numbers_permutations, operators):
  sol = 'SIN SOLUCIÓN'
  for permutation in numbers_permutations:
      sol = check_25(permutation, operators)
      if sol != 'SIN SOLUCIÓN':
        break
  return sol

# For testing purposes
corrects = 0
total = 100
for key, value in solutions.items():
  numbers_permutations = permutations(list(key))
  operators = ['+', '-', '*', '/']
  sol = compute_25(numbers_permutations, operators)
  if sol == value:
    corrects += 1
  else:
    if sol == 'SIN SOLUCIÓN' or value == 'SIN SOLUCIÓN':
      print(f'Incorrecto. La solución correcta es {value} y tu solución es {sol}')
    else:
      corrects += 1
print(f'Correctos: {corrects}/{total} ({(corrects/total)*100}%)')
  
