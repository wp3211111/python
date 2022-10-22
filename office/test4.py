from statistics import mode
import xlrd
from xlutils.copy import copy
import xlwt
# 打开excel

read_book = xlrd.open_workbook('json2.xls')
# 复制数据
wb = copy(read_book)

sh = wb.get_sheet(0)

# 设置边框
border = xlwt.Borders()

# 1 细实线 2 小粗实线 3 细虚线   4 中细虚线  5 大粗实线  6 双线  7 细点虚线  8 大粗虚线  9  细点划线  10 粗点划线  11  细点双划线  12  粗点双划线 13 斜点划线

# 设置背景颜色

pattern = xlwt.Pattern()

pattern.pattern = xlwt.Pattern.SOLID_PATTERN

pattern.pattern_fore_colour = 5

ft = xlwt.Font()
ft.name = '微软雅黑'
# 1 白色 2 红色 3 绿色 4 蓝色 5 黄色 6 紫色 7 蓝绿色 8 深黑色 9 浅灰色白色 10 红色
ft.colour_index = 6
ft.height = 11 * 20
ft._weight = 11 * 20
ft.bold = True
ft.underline = True
ft.italic = True

style = xlwt.XFStyle()
style.font = ft

sh.write(46,0,'我新增的 = 很牛批',style)
sh2 = wb.add_sheet('data2')


wb.save('json4.xls')
