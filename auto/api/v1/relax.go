// Code generated by go-mir. DO NOT EDIT.
// versions:
// - mir v4.2.0

package v1

import (
	"net/http"

	"github.com/alimy/mir/v4"
	"github.com/gin-gonic/gin"
	"github.com/rocboss/paopao-ce/internal/model/web"
)

type Relax interface {
	_default_

	// Chain provide handlers chain for gin
	Chain() gin.HandlersChain

	GetUnreadMsgCount(*web.GetUnreadMsgCountReq) (*web.GetUnreadMsgCountResp, mir.Error)

	mustEmbedUnimplementedRelaxServant()
}

type RelaxChain interface {
	ChainGetUnreadMsgCount() gin.HandlersChain

	mustEmbedUnimplementedRelaxChain()
}

// RegisterRelaxServant register Relax servant to gin
func RegisterRelaxServant(e *gin.Engine, s Relax, m ...RelaxChain) {
	var cc RelaxChain
	if len(m) > 0 {
		cc = m[0]
	} else {
		cc = &UnimplementedRelaxChain{}
	}
	router := e.Group("v1")
	// use chain for router
	middlewares := s.Chain()
	router.Use(middlewares...)

	// register routes info to router
	router.Handle("GET", "/user/msgcount/unread", append(cc.ChainGetUnreadMsgCount(), func(c *gin.Context) {
		select {
		case <-c.Request.Context().Done():
			return
		default:
		}
		req := new(web.GetUnreadMsgCountReq)
		if err := s.Bind(c, req); err != nil {
			s.Render(c, nil, err)
			return
		}
		resp, err := s.GetUnreadMsgCount(req)
		if err != nil {
			s.Render(c, nil, err)
			return
		}
		var rv _render_ = resp
		rv.Render(c)
	})...)
}

// UnimplementedRelaxServant can be embedded to have forward compatible implementations.
type UnimplementedRelaxServant struct{}

func (UnimplementedRelaxServant) Chain() gin.HandlersChain {
	return nil
}

func (UnimplementedRelaxServant) GetUnreadMsgCount(req *web.GetUnreadMsgCountReq) (*web.GetUnreadMsgCountResp, mir.Error) {
	return nil, mir.Errorln(http.StatusNotImplemented, http.StatusText(http.StatusNotImplemented))
}

func (UnimplementedRelaxServant) mustEmbedUnimplementedRelaxServant() {}

// UnimplementedRelaxChain can be embedded to have forward compatible implementations.
type UnimplementedRelaxChain struct{}

func (b *UnimplementedRelaxChain) ChainGetUnreadMsgCount() gin.HandlersChain {
	return nil
}

func (b *UnimplementedRelaxChain) mustEmbedUnimplementedRelaxChain() {}
