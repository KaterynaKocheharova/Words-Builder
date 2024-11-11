type AuthFormContainerProps = {
    children: React.ReactNode;
}

const AuthFormContainer = ({children}: AuthFormContainerProps) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default AuthFormContainer
