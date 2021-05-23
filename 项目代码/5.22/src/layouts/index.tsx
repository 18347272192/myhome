import { IRouteComponentProps } from 'umi';
import TeacherLayout from './teachersLayout';
const Layout:React.FC<IRouteComponentProps> = props=>{
    if (/\/teachers/.test(props.location.pathname)) {
        return <TeacherLayout>{ props.children }</TeacherLayout>
      }
      return props.children
}
export default Layout;