import { Layout, Menu, Dropdown,Popover, Button,Badge } from 'antd';
import { NavLink } from 'umi';
import  style from'./index.less';
import { ClockCircleOutlined } from '@ant-design/icons';
import {
    BellOutlined
  } from '@ant-design/icons';
const { Header, Footer, Content } = Layout;
const practiceMenu = <Menu>
    <Menu.Item>
        <NavLink to='/teachers/planList'>计划</NavLink>
    </Menu.Item>
    <Menu.Item >
        <NavLink to='/teachers/viewPlan'>进度</NavLink>
    </Menu.Item>
    <Menu.Item >
        <NavLink to='/teachers/defence'>答辩</NavLink>
    </Menu.Item>
</Menu>
const practive = <Menu>
<Menu.Item>
    <NavLink to='/teachers/interviewList'>面试记录</NavLink>
</Menu.Item>
<Menu.Item >
    <NavLink to='/teachers/interviewManage'>面试记录管理</NavLink>
</Menu.Item>
<Menu.Item >
    <NavLink to='/teachers/rankList'>面试排行榜</NavLink>
</Menu.Item>
</Menu>
const answer = <Menu>
<Menu.Item>
    <NavLink to='/teachers/questionDetail'>问答列表</NavLink>
</Menu.Item>
<Menu.Item >
    <NavLink to='/teachers/questionHandle'>问答管理</NavLink>
</Menu.Item>
</Menu>
const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );

const TearcherLayout: React.FC = (props) => {
    return <Layout>
        <Header className={style.heade}>
            <img data-v-7178e8ae="" src="http://111.203.59.61:8060/static/img/w_bw.172a76e5.png" alt="" />
           <div className={style.box}> <NavLink to='/teachers/postSkill'>岗位</NavLink></div>
           <div className={style.box}><NavLink to='/teachers/proManagement'>项目</NavLink></div> 
           <div className={style.box}> <Dropdown overlay={practiceMenu}><div className={style.box}>实训</div></Dropdown></div>
           <div className={style.box}> <Dropdown overlay={practive}><div className={style.box}>面试</div></Dropdown></div>
           <div className={style.box}> <Dropdown overlay={answer}><div className={style.box}>问答</div></Dropdown></div>
           <Popover content={content} title="Title">
           <div className={style.box}><BellOutlined/> <Badge  className={style.num} count={5}>
      <a href="#" />
    </Badge></div>
          </Popover>
        </Header>
        <Content>{props.children}</Content>
        <Footer>
  <div data-v-01b3f466="" data-v-7178e8ae="" className={style.bw_bottom}>
   <div data-v-01b3f466="" className={style.b_b_detail}>
    <div data-v-01b3f466="" className={style.b_b_left}>
     <div data-v-01b3f466="" className={style.bw_img}>
      <img data-v-01b3f466="" src="http://111.203.59.61:8060/static/img/bottom_logo.c8aa9859.png" alt="" />
     </div>
     <div data-v-01b3f466="" className={style.b_w_tel}>
      400-008-0987
     </div>
    </div>
    <div data-v-01b3f466="" className={style.b_b_middle}>
     <div data-v-01b3f466="" className={style.middle_one}>
      <div data-v-01b3f466="" className={style.middle_title}>
       走进八维
      </div>
      <div data-v-01b3f466="" className={style.href_a}>
       <a data-v-01b3f466="" href="http://bwie.cn/bwie/about.html">集团概况</a>
      </div>
      <div data-v-01b3f466="" className={style.href_a}>
       <a data-v-01b3f466="" href="http://bwie.cn/bwie/news/index.html">八维动态</a>
      </div>
      <div data-v-01b3f466="" className={style.href_a}>
       <a data-v-01b3f466="" href="http://bwie.cn/bwie/lead.html">领导关怀</a>
      </div>
      <div data-v-01b3f466="" className={style.href_a}>
       <a data-v-01b3f466="" href="http://bwie.cn/bwie/honour.html">企业荣誉</a>
      </div>
     </div>
     <div data-v-01b3f466="" className={style.middle_two}>
      <div data-v-01b3f466="" className="middle_title">
       八维文化
      </div>
      <div data-v-01b3f466="" className="href_a">
       <a data-v-01b3f466="" href="http://bwie.cn/bwie/culture.html">八维理念</a>
      </div>
      <div data-v-01b3f466="" className="href_a">
       <a data-v-01b3f466="" href="http://bwie.cn/bwie/spirit.html">八维精神</a>
      </div>
      <div data-v-01b3f466="" className="href_a">
       <a data-v-01b3f466="" href="http://bwie.cn/bwie/dak.html">文化驿站</a>
      </div>
     </div>
     <div data-v-01b3f466="" className="middle_three middle">
      <div data-v-01b3f466="" className="middle_title">
       社会责任
      </div>
      <div data-v-01b3f466="" className="href_a">
       <a data-v-01b3f466="" href="http://bwie.cn/bwie/duty/public.html">社会公益</a>
      </div>
      <div data-v-01b3f466="" className="href_a">
       <a data-v-01b3f466="" href="http://bwie.cn/bwie/duty/great.html">大善之举</a>
      </div>
     </div>
     <div data-v-01b3f466="" className={style.middle_four}>
      <div data-v-01b3f466="" className="middle_title">
       联系我们
      </div>
      <div data-v-01b3f466="" className="href_a">
       <a data-v-01b3f466="" href="http://bwie.cn/bwie/partners.html">业务合作</a>
      </div>
      <div data-v-01b3f466="" className="href_a">
       <a data-v-01b3f466="" href="http://bwie.cn/bwie/sign_up.html">咨询报名</a>
      </div>
      <div data-v-01b3f466="" className="href_a">
       <a data-v-01b3f466="" href="http://bwie.cn/bwie/concact.html">联系方式</a>
      </div>
     </div>
    </div>
    <div data-v-01b3f466="" className={style.b_b_right}>
     <img data-v-01b3f466="" src="http://111.203.59.61:8060/static/img/wechat.e60a83ec.png" alt="" />
     <div data-v-01b3f466="" className="wechat_text">
      八维微信公众号
     </div>
    </div>
   </div>
   <div data-v-01b3f466="" className={style.b_b_sign}>
    京公网安备 11010802031438号 &copy; Copyright 2020. 八维教育版权所有 | 京ICP备12008262号-12
   </div>
  </div>

        </Footer>
    </Layout>
}
export default TearcherLayout