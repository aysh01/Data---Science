#reading null() values
import pandas as pd
a=pd.read_csv('employee.csv')
#b=pd.isnull(a['Name'])
#print(a[b])

a['Name'].fillna('No Nama',inplace=True)
print(a)
