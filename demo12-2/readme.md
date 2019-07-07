TRS!!!:
本例中，两个入口中的多个模块都引用了相同的react 和react-dom模块，如果不提取出相同的react react-dom模块，直接打包的两个bundle1.js和bundle2.js会重复包含react 额react-dom的内容，代码重复影响加载效率