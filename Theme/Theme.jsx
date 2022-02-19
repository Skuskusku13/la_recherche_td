import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints, darken, mode, whiten } from '@chakra-ui/theme-tools';

const styles = {
    global : props => ( {
        html    : {
            fontSize : { sm : '100%', md : '110%', lg : '115%', xl : '117%' }
        }, body : {
            bg         : mode('#fff', '#000')(props),
            fontFamily : '@import url(\'https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&display=swap\');',
        }
    } )
};

const components = {
    Text : {
        baseStyle     : (props) => ( {
            color : mode('#333', '#f1f1f1')(props)
        } ),
        variants : {
            'DrawerLink' : {
                pos : 'relative',
                left: '27px'
            }
        }
    }
};

const breakpoints = createBreakpoints({
    sm : '320px', md : '768px', lg : '1024px', xl : '1440px'
});

const theme = extendTheme({ styles, components, breakpoints });
export default theme;