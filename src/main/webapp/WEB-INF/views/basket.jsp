<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>HappyHouse</title>
</head>
<body>

<script
		src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
	<script type="text/javascript" >

	$(function () {
		var total = 0;
	})
	
	function changeAmount(no, val){
		location.href ="basket/amount?no=" +no + "&val="+val;
	}
	function purchaseGo(pr){
		alert("총 결제금액 : " +pr + "원");
		location.href='basket/purchase';
	}
	
	

</script>

	<jsp:include page="Header.jsp" />
	<div class="container-fluid">


		<div class="row">

			<div class="col-12">
				<div class="card mb-4">
					<div class="card-header">장바구니</div>

					<div class="card-body">
						
						<div class="order_details_iner"
							style="width: 100%; height: 550px; overflow: auto">
							<table class="table table-active text-left">
								<thead>
									<tr>
										<td></td>
										<td>그룹명</td>
										<td>상품명</td>
										<td>판매가</td>
										<td>재고</td>
										<td>구매수량</td>
										<td></td>

									</tr>

								</thead>

								<tbody>
									<c:if test="${!empty baskets}">
										<c:forEach var="good" items="${baskets}">
												<tr>
													<td>
														<c:if test="${good.getSelected() == 0 }">
														<a
														href="basket/select?no=${good.getNo() }">○</a>
															
														</c:if>
														
														<c:if test="${good.getSelected() == 1 }">
														<a
														href="basket/Noselect?no=${good.getNo() }">●</a>
															
														</c:if>
													</td>
													<td>${good.getGroupname() } </td>
													<td>${good.getName() } </td>
													<td>${good.getPrice() } </td>
													<td>${good.getStock() } </td>
													<td>
														<select name="amount" onchange="changeAmount(${good.getNo() }, this.value)">
															<option value='${good.getAmount() }'>${good.getAmount() }</option>
																<c:forEach var="i" begin="1" end="${good.getStock() }">
																	<c:if test='${good.getAmount() != i }'>
																	<option>${i }</option>
																	</c:if>
																</c:forEach>
														</select>
													</td>

													<td><a
														href="basket/delete?no=${good.getNo() }" onClick="alert('장바구니에서 삭제')">삭제</a></td>

												</tr>

										</c:forEach>

									</c:if>

								</tbody>
							</table>
						</div>
						<hr>
						
						<h3>합계 금액 : ${priceCal } 원
						<button id="purchase" class="btn btn-warning" type="submit" onclick="purchaseGo(${priceCal});">
											구매하기</button>
						
						</h3>
					</div>
				</div>
			</div>
			</div>
			</div>
			
</body>
</html>