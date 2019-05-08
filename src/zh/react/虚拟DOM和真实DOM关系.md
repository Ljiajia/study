## 虚拟DOM和真实DOM的关系

首先，Virtual DOM并没有完全实现DOM，即虚拟DOM和真正地DOM是不一样的，Virtual DOM最主要的还是保留了Element之间的层次关系和一些基本属性。因为真实DOM实在是太复杂，一个空的Element都复杂得能让你崩溃，并且几乎所有内容我根本不关心好吗。所以Virtual DOM里每一个Element实际上只有几个属性，即最重要的，最为有用的，并且没有那么多乱七八糟的引用，比如一些注册的属性和函数啊，这些都是默认的，创建虚拟DOM进行diff的过程中大家都一致，是不需要进行比对的。所以哪怕是直接把Virtual DOM删了，根据新传进来的数据重新创建一个新的Virtual DOM出来都非常非常非常快。（每一个component的render函数就是在做这个事情，给新的virtual dom提供input）。

　　 所以，引入了Virtual DOM之后，React是这么干的：```你给我一个数据，我根据这个数据生成一个全新的Virtual DOM，然后跟我上一次生成的Virtual DOM去 diff，得到一个Patch，然后把这个Patch打到浏览器的DOM上去。完事。并且这里的patch显然不是完整的虚拟DOM，而是新的虚拟DOM和上一次的虚拟DOM经过diff后的差异化的部分。```

　　
　　假设在任意时候有，```VirtualDom1 == DOM1 （组织结构相同, 显然虚拟DOM和真实DOM是不可能完全相等的，这里的==是js中非完全相等）。当有新数据来的时候，我生成VirtualDom2，然后去和VirtualDom1做diff，得到一个Patch（差异化的结果）。然后将这个Patch去应用到DOM1上，得到DOM2。如果一切正常，那么有VirtualDom2 == DOM2（同样是结构上的相等）。```


　　这里你可以做一些小实验，去破坏VirtualDom1 == DOM1这个假设（手动在DOM里删除一些Element，这时候VirtualDom里的Element没有被删除，所以两边不一样了）。
然后给新的数据，你会发现生成的界面就不是你想要的那个界面了。

　　
　　最后，回到为什么Virtual Dom快这个问题上。
其实是由于每次生成virtual dom很快，diff生成patch也比较快，而在对DOM进行patch的时候，虽然DOM的变更比较慢，但是React能够根据Patch的内容，优化一部分DOM操作，比如之前的那个例子。

　　重点就在最后，哪怕是我生成了virtual dom(需要耗费时间)，哪怕是我跑了diff（还需要花时间），但是我根据patch简化了那些DOM操作省下来的时间依然很可观（这个就是时间差的问题了，即节省下来的时间 > 生成 virtual dom的时间 + diff时间）。所以总体上来说，还是比较快。
