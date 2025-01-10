// import { m } from 'framer-motion';

// import { Container, Tilte } from '@mantine/core';

// import { ForbiddenIllustration } from 'src/assets/illustrations';

// import { varBounce, MotionContainer } from 'src/components/animate';

// ----------------------------------------------------------------------

export function RoleBasedGuard({ sx, children, hasContent, currentRole, acceptRoles }) {
  if (typeof acceptRoles !== 'undefined' && !acceptRoles.includes(currentRole)) {
    return hasContent ? (
      // <Container component={MotionContainer} sx={{ textAlign: 'center', ...sx }}>
      //   <m.div variants={varBounce().in}>
      //     <Tilte variant="h3" sx={{ mb: 2 }}>
      //       Permission denied
      //     </Tilte>
      //   </m.div>

      //   <m.div variants={varBounce().in}>
      //     <Tilte sx={{ color: 'text.secondary' }}>
      //       You do not have permission to access this page.
      //     </Tilte>
      //   </m.div>

      //   <m.div variants={varBounce().in}>
      //     <ForbiddenIllustration sx={{ my: { xs: 5, sm: 10 } }} />
      //   </m.div>
      // </Container>
      <>loading</>
    ) : null;
  }

  return <> {children} </>;
}
