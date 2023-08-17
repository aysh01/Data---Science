#Assgn-35)
#Write a prog. to create a DataFrame 
#from a 2D array list.
import pandas as pd
a={'Name':['Abi','Diba','Shiv'],
   'RollNo':[101,130,115],'Address':[113,140,216],
   'CountryCode':[124,200,217]}
a=pd.DataFrame(a)
print(a)
