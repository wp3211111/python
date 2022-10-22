import xlrd

# 打开excel
wb = xlrd.open_workbook('json2.xls')

# print(f'excel中有{wb.nsheets}个工作簿')
# print(f'excel中工作簿名字:{wb.sheet_names()}')
[data]  =  wb.sheet_names()
sh2 = wb.sheet_by_name(data)
print(sh2)
# 获取多少行
print(sh2.nrows)
# 获取多少列
print(sh2.ncols)

# 获取单元格的值
# print(sh2.cell_value(0,0))
# print(sh2.cell(0,0).value)
# print(sh2.row(0)[0].value)

print(sh2.row_values(0))
print(sh2.col_values(0))



