<template>
  <div id="test">
    <h1 class="title">标题</h1>
    <div class="information">
      <div class="userLogo">
        <img src="../../assets/img/首页.png"/>
      </div>
      <div class="userName">
        <span class="name">作者名</span><img src="../../assets/img/首页.png"/><br/>
        <span class="time">2019-08-09 17:01:00</span>
      </div>
      <a href="#" class="about">+关注</a>
    </div>
    <!--文章的内容-->
    <p class="content" v-html="article.content3" :class="{more:moreContent}"></p>
    <div class="moreContent" @click="getmore" v-show="!moreContent">展开全文</div>
  </div>
</template>

<script>
    export default {
        name: 'test',
        data() {
            return {
                article: {
                    content: '<p>千万不要碍着大熊猫吃东西，即使你是小熊猫也不行</p><img src=\'http://shougongji.cn/wp-content/uploads/2018/08/linghun-5.jpg\'/><h2>完全符合气质</h2><img src=\'http://shougongji.cn/wp-content/uploads/2018/08/linghun-5.jpg\'/><h2>要是没人进来那多尴尬</h2><img src=\'http://shougongji.cn/wp-content/uploads/2018/08/linghun-5.jpg\'/><h2>走，去澳大利亚抓袋鼠去</h2><img src=\'http://shougongji.cn/wp-content/uploads/2018/08/linghun-5.jpg\'/>',
                    content3: `<img src='/src/page/testimage/article3_1.jpg'/>
\t\t\t\t\t\t\t\t<p>在过去几十年中，计算机科学有了长足的发展，但人们编写计算机软件的过程却没有发生根本的改变——程序员必须使用特定的程序语言一步步手工编写程序的精确算法逻辑。尽管编程语言近年来正在变得越来越友好，但这项工作仍然是绝大多数计算机用户未曾接触的事物。</p>
\t\t\t\t\t\t\t\t<p>在最近的一项研究中，微软发布了自己的深度学习程序生成研究。在该研究中，深度神经网络学会了遵从用户的意图来生成计算机程序。用户只需要提供一些简单的输入/输出（I/O）范例以表示自己希望获得的程序是什么形式的。系统就可以使用这些信息生成相应的程序。</p>
\t\t\t\t\t\t\t\t<img src= '/src/page/testimage/article3_2.jpg' />
\t\t\t\t\t\t\t\t<p>微软提出的新系统 RobustFill 采用了最近发展迅猛的深度学习方式，通过数据驱动方法进行程序生成，不需要任何手工编写的规则。与快速填充相反，它使用曾被用于机器翻译的「attentional sequence-to-sequence 神经网络」来通过 I/O 范例生成所需的程序。下图展示了微软的神经网络架构：</p>
\t\t\t\t\t\t\t\t<img src='/src/page/testimage/article3_3.jpg'/>
\t\t\t\t\t\t\t\t<p>这个系统经过了数百万随机生成的 I/O 程序配对的训练，学会了 DSL 中的语义学规则，目前已经可以在真实情况下的数据中展示良好的性能。总体而言，该系统在一个真实世界任务基准测试中达到了 92% 的准确率。其中最令人兴奋的是，在测试中，I/O 范例包含了一些明显的噪音，而系统仍然保持了高精度。</p>`
                },
                moreContent: false
            }
        },
        methods: {
            getmore() {
                this.moreContent = true
            }
        }
    }
</script>

<style scoped lang="stylus">
  #test{
    padding:0 17px;
    background-color: #f8f8f8;
    .title{
      font-size 25px;
      padding-top 16px;
      line-height 34px;
      font-weight bolder;
      color #222;
    }
    .information{
      margin-top 12px;
      position relative;
      .userLogo{
        height 32px;
        width 32px;
        border-radius 32px;
        overflow hidden;
        float: left;
        img{
          width: 30px;
          height: 30px;
        }
      }
      .userName{
        font-size:12px;
        line-height:16px;
        margin-left: 40px;
        .name{
          color: #406599
        }
        .time{
          color: #999;
        }
        img{
          width: 15px;
          height: 15px;
        }
      }
      .about{
        background-color:#2a90d7;
        border: none;
        border-radius: 5px;
        color:#fff;
        letter-spacing: 5px;
        text-decoration: none;
        width:72px;
        height:28px;
        line-height:28px;
        text-align: center;
        position:absolute;
        top:50%;
        margin-top: -14px;
        right:0px;
        font-size small;
      }
    }
    .content {
      padding-top: 24px;
      max-height:500px;
      overflow: hidden;
      h2 {
        font-size: 18px;
        border-left-width: 3px;
        border-left: solid #ed4040;
        padding-left: 6px;
        line-height: 28px;
        margin: 12px 0;
      }
      p {
        margin-bottom:24px;
        word-wrap: break-word;
        font-size: 18px;
        line-height: 28px;
        color: #333;
      }
    }
    .more{
      max-height 750px;
      overflow: scroll;
      &::-webkit-scrollbar{
        display none
      }
    }
    .moreContent{
      margin-top: 22px;
      text-align: center;
      height: 20px;
      line-height: 20px;
      color: #54a0dc;
    }
  }
</style>
