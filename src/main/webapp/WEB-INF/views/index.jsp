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
	<jsp:include page="Header.jsp" />
	<div class="container-fluid">


		<div class="row">

			<div class="col-12">
				<div class="card mb-4">
					<div class="card-header">상품</div>

					<div class="card-body">
					

						
						<div class="order_details_iner"
							style="width: 100%; height: 550px; overflow: auto">
							<table class="table table-active text-left">
								<thead>
									<tr>
										<td>그룹명</td>
										<td>상품명</td>
										<td>판매가</td>
										<td>재고</td>
										<td></td>

									</tr>

								</thead>

								<tbody>
									<c:if test="${!empty Goodss}">
										<c:forEach var="good" items="${Goodss}">
												<tr>
													<td>${good.getGroupname() } </td>
													<td>${good.getName() } </td>
													<td>${good.getPrice() } </td>
													<td>${good.getStock() } </td>
													
													<c:if test="${good.getStock() != 0}">
													<td><a
														href="index/insert?no=${good.getNo() }" onClick="alert('장바구니 등록')">장바구니</a></td>
													</c:if>
													
													<c:if test="${good.getStock() == 0}">
													<td>재고없음</td>
													</c:if>

												</tr>

										</c:forEach>

									</c:if>

								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
</body>
</html>