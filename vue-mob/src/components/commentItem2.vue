<template>
    <section class='comment_item'>
        <!-- topLeft布局的评论样式 -->
        <div class='topFooter'>
            <div class="mid">
                <div class="content_text">
                  {{itemJson.user}} : {{itemJson.content}}
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    props: ['itemJson']
}
</script>
<style lang='stylus'>
.comment_item {
    position: relative;
    margin: 0 16px;
    .topFooter{
        padding: 15px 0;
        border-bottom: 1px solid #eee;
        .top{
            .portrait{
                display: inline-block;
                vertical-align: middle;
                width: 30px;
                height: 30px;
                overflow: hidden;
                border-radius: 100%;
                img {
                    width: 100%;
                }
            }
            .name {
                display: inline-block;
                vertical-align: middle;
                color: #007aff;
                overflow: hidden;
                text-align: left;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 14px;
                padding-left: 5px;
            }
        }
        .mid{
            margin-top: 6px;
            font-size: 16px;
            .content_text {
                position: relative;
                word-wrap: break-word;
            }
            .altUser_name{
                color: #007aff;
                text-decoration: none;
            }
        }
        .footer{
            margin-top: 6px;
            font-size: 12px;
            color: #888;
            span{
                padding: 4px 0;
            }
            .delete{
                float: right;
                padding: 0 5px;
            }
        }
    }
}
</style>
